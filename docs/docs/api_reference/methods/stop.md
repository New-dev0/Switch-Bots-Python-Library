# stop

Stops the app and stops listening for updates.

## Example

```python
from swibots import BotApp

app = BotApp("TOKEN")

async def main():
    await app.start()
    ...  # Invoke API methods
    await app.stop()


app.run(main())
```
