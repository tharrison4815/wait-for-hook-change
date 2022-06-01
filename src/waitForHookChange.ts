import { act, waitFor } from '@testing-library/react'

const waitForHookChange = (
  hookResult: { current: unknown },
  changeTrigger: () => void
) => {
  const initalValue = hookResult.current

  act(changeTrigger)

  return waitFor(() =>
    hookResult.current === initalValue ? Promise.reject() : Promise.resolve()
  )
}

export { waitForHookChange }
