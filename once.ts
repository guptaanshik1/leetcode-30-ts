function once<T extends (...args: any[]) => any>(fn: T): 
 ((...args: Parameters<T>) => ReturnType<T> | undefined) {
   let isCalled: boolean = false
  return function (...args) {      
      if (!isCalled) {
        isCalled = true
        return fn(...args)
      } else {
        return undefined
      }
  };
}
