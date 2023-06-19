# Denoflare test

Try [Denoflare](https://denoflare.dev/).

## Load .env file

### POSIX

```sh
export $(grep -v ^# < .env)
```

### Fish

```fish
export (grep -v ^# < .env)
```

## Usage

```sh
> curl 'https://numeronym.rusconn3.workers.dev?word=kubernetes'
k8s
```
