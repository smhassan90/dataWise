export const dashboard = () => {
  return (
    <div className="bg-red-500">
        Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used

- A server/client branch if (typeof window !== 'undefined').
- Variable input such as Date.now() or Math.random() which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.

ye error aa raha hai mene app ke folder me layout.js ki file banai hai or (root) ke folder me bhi layout.js ki file banai hai is waja se ye erro de rahahai isko solve karo



- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

See more info here: https://nextjs.org/docs/messages/react-hydration-error


- className="geist_6feb203d-module__8DQF1a__variable geist_mono_c7d183a-module__ZW1U4G__variable..."
    </div>
  )
}
export default dashboard;
