# Pyrope

[Deta](https://www.deta.sh) allows for some really simple, cheap and fully-featured hosting.

I decided to recreate the [hrefsharp](https://github.com/x-t/hrefsharp) .NET Core 3.1 URL shortener in Express with Deta as the hosting provider, instead of Azure.

Thus, an even simpler, and possibly faster URL shortener.

## Deploy

```bash
deta deploy
```

## Usage

One (1) environment variable: `PUT_SECRET`.

- When it's empty, PUTs are disabled, and you can only create new records through the Deta Base UI.
- When it's set to `public`, PUTs do not require a `secret` JSON property, and will allow anyone to PUT to the database.
- When it's set to any string, PUTs will require the `secret` JSON property, which will only allow database PUTs to people who have the secret string.

If a database PUT is successful, the ID of the redirect is given back.

### Example

Making a new URL with custom ID when `PUT_SECRET=secret`

```
PUT /
{
  "id": "custom-id",
  "url": "https://google.com",
  "secret": "secret"
}

custom-id
```

Making a new URL with random ID when `PUT_SECRET=public`

```
PUT /
{
  "url": "https://google.com"
}

-UqfTPHI
```

Going to the redirected page

```
GET /custom-id

Location: https://google.com
```
