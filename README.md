### json-flatten
Simple project for transforming nested json structure into flatten structure. Created fast just for single run but maybe will be useful in the future.

eg.
```json
{
    "key0": "val0",
    "key1": {
        "key2": "val"
    }
}
```
will become

```json
{
    "key0": "val0",
    "key1_key2": "val"
}
```