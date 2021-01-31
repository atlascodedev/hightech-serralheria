import { navigate } from "gatsby"
import convertToSlug from "./converToSlug"
import scrollPolyfill from "./scrollPolyfill"

const scrollIntoViewHelper = (
  ref: React.RefObject<HTMLElement> | null = null,
  menuName?: string,
  callback?: () => void | null | undefined
): void => {
  const isChrome = global.window.navigator.userAgent.includes("Chrome")
  const smoothScrollSupport =
    "scrollBehavior" in global.window.document.documentElement.style

  if (global.window.location.pathname === "/") {
    try {
      if (isChrome || !smoothScrollSupport) {
        scrollPolyfill(`#${convertToSlug(menuName).toLowerCase()}`)
      } else {
        ref!.current!.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    } catch (error) {
      if (error.message === "ref.current is null") {
        throw new Error(
          "Reference to element is null, check if you passed it at array initialization"
        )
      } else {
        console.log(error)
      }
    }

    if (typeof callback == "function" && callback) {
      callback()
    }
  } else {
    try {
      navigate("/", {
        state: { value: convertToSlug(menuName).toLowerCase(), restore: true },
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default scrollIntoViewHelper
