# set

::: info
出于兼容性原因，此函数仅在 `es-toolkit/compat` 中提供。它可能具有替代的原生 JavaScript API，或者尚未完全优化。

从 `es-toolkit/compat` 导入时，它的行为与 lodash 完全一致，并提供相同的功能，详情请见 [这里](../../../compatibility.md)。

:::

在对象的指定路径设置给定值。如果路径的任何部分不存在，将会创建它。

## 签名

```typescript
function set<T extends object>(
  obj: T,
  path: string | number | symbol | Array<string | number | symbol>,
  value: unknown
): T;
```

### 参数

- `obj` (`T`): 要修改的对象。
- `path` (`string | number | symbol | Array<string | number | symbol>`): 要设置的属性路径。
- `value` (`unknown`): 要设置的值。

### 返回值

(`T`): 返回修改后的对象。如果未指定 T，默认值为 unknown。

## 示例

```typescript
import { set } from 'es-toolkit/compat';

// Set a value in a nested object
const obj = { a: { b: { c: 3 } } };
set(obj, 'a.b.c', 4);
console.log(obj.a.b.c); // 4

// Set a value in an array
const arr = [1, 2, 3];
set(arr, 1, 4);
console.log(arr[1]); // 4

// Create non-existent path and set value
const obj2 = {};
set(obj2, 'a.b.c', 4);
console.log(obj2); // { a: { b: { c: 4 } } }

// Use with interface
interface O {
  a: number;
}
const obj3 = {};
const result = set<O>(obj3, 'a', 1); // typeof result = { a: number }
console.log(result); // { a: 1 }
```
