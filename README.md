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

## Usage

```sh
> curl 'https://numeronym.rusconn3.workers.dev?word=kubernetes'
k8s
```
