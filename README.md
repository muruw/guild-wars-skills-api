# Guild Wars skills API

A REST API app created with Deno Oak framework

The API is accessible from here:

https://guild-wars-skills-api.deno.dev/

### Endpoints
```
"/" - welcome text
"/api" - all skills
"/api/:name" - replace name with skill name to get information about specific skill
```

### Currently implemented skills

- [ ] Core
- - [x] Warrior
- - [ ] Ranger
- - [ ] Monk
- - [ ] Elementalist
- - [ ] Mesmer
- - [ ] Necromancer

## For running the API locally

Start the server with the command:

```
deno run --allow-net main.ts
```

This starts the server at http://localhost:8000/

Try go to http://localhost:8000/api/Brachiosaurus or http://localhost:8000/api/
