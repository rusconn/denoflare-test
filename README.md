# Denoflare test

Try [Denoflare](https://denoflare.dev/).

## Load .env file

### POSIX

```sh
export "$(xargs -L 1 < .env)"
```

### Fish

```fish
export (xargs -L 1 < .env)
```
