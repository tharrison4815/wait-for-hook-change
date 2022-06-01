# wait-for-hook-change

## Getting started

To add to your package simply run the following:

NPM:

```
npm i -D wait-for-hook-change
```

Yarn:

```
yarn add --dev wait-for-hook-change
```

Note:
This library relies on `@testing-library/react` and is not included.
You must have this installed in your package.

## Usage

Example hook:

```javascript
const useAdder = () => {
  const [value, setValue] = useState(0)

  return {
    value,
    addOne: () => setValue(value + 1),
  }
}
```

Testing the result of a hook change:

```javascript
import { waitForHookChange } from 'wait-for-hook-change'

it('should return 1 after calling addOne', async () => {
  const { result } = renderHook(useAdder)

  await waitForHookChange(result, () => result.current?.addOne())

  expect(result.current.value).toBe(1)
})
```
