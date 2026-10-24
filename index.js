/** Host half of the whale maid bundle.
 *
 *  The client asks this route for the DeepSeek balance, so the mascot no
 *  longer depends on dsh-whale-widget being installed. The API key comes from
 *  the profile credential store; when it is missing the route answers
 *  ok:false and the client falls back to the widget route if that exists.
 */

const BALANCE_URL = 'https://api.deepseek.com/user/balance';
const TTL_MS = 30000;

export function apply(root) {
  root.inject(['webServer', 'credentials'], (ctx) => {
    let cache = null;

    const readBalance = async () => {
      if (cache !== null && Date.now() - cache.at < TTL_MS) return cache.value;
      let value = null;
      try {
        const cred = await ctx.credentials.resolve('DEEPSEEK_API_KEY');
        if (cred && typeof cred.value === 'string' && cred.value !== '') {
          const response = await fetch(BALANCE_URL, {
            headers: { Authorization: 'Bearer ' + cred.value },
            signal: AbortSignal.timeout(8000),
          });
          if (response.ok) {
            const data = await response.json();
            const infos = data && Array.isArray(data.balance_infos) ? data.balance_infos : [];
            const info = infos.find((item) => item && String(item.currency || '').toUpperCase() === 'CNY')
              || infos[0];
            const total = info === undefined ? NaN : Number(info.total_balance);
            if (Number.isFinite(total)) {
              value = {
                ok: true,
                totalBalance: total,
                currency: info.currency || 'CNY',
                updatedAt: Date.now(),
              };
            }
          }
        }
      } catch (err) {
        // no key, no network or an unexpected payload: report no balance
      }
      cache = { at: Date.now(), value };
      return value;
    };

    ctx.webServer.register({
      path: '/dsh-cutewhale/balance.json',
      handler: async (req, res) => {
        const value = await readBalance();
        res.writeHead(200, {
          'Content-Type': 'application/json; charset=utf-8',
          'Cache-Control': 'no-store',
        });
        res.end(JSON.stringify(value === null ? { ok: false, error: 'NO_BALANCE' } : value));
      },
    });
  });
}
