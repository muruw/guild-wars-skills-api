# Guild Wars skills API

A REST API app created with Deno Oak framework

The API is accessible from here:

https://guild-wars-skills-api.deno.dev/

### Endpoints
```
"/" - welcome text
"/api/profession/:profession" - all profession skills. Accepted values: warrior, ranger
"/api/name/:name" - replace name with skill name to get information about specific skill
```

### Currently implemented skills

- [ ] Core
- - [x] Warrior
- - [x] Ranger
- - [x] Monk
- - [ ] Elementalist
- - [ ] Mesmer
- - [ ] Necromancer

## For running the API locally

Start the server with the command:

```
deno run --allow-net main.ts
```

This starts the server at http://localhost:8000/
