import { chainIdToChain } from './chainIdToChain'
import { test, expect } from "vitest"

test("chainIdToChain", () => {
    
  const mainnetChain = chainIdToChain(1)
  const goerliChain = chainIdToChain(5)
  const polygonChain = chainIdToChain(137)
  const mumbaiChain = chainIdToChain(80001)
  const sepoliaChain = chainIdToChain(11155111)
  const baseSepoliaChain = chainIdToChain(84532)
  const optimismSepoliaChain = chainIdToChain(11155420)
  const zoraSepoliaChain = chainIdToChain(999999999)

  expect(mainnetChain.id).toEqual(1)
  expect(goerliChain.id).toEqual(5)
  expect(polygonChain.id).toEqual(137)
  expect(mumbaiChain.id).toEqual(80001)
  expect(sepoliaChain.id).toEqual(11155111)
  expect(baseSepoliaChain.id).toEqual(84532)
  expect(optimismSepoliaChain.id).toEqual(11155420)
  expect(zoraSepoliaChain.id).toEqual(999999999)
  
})
