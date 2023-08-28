# Guild Wars skills API

A REST API app created with Deno Oak framework

The API is accessible from here:

https://guild-wars-skills-api.deno.dev/

### Endpoints

```
"/" - welcome text
"/api/profession/:profession" - all profession skills. Accepted values: warrior, ranger, monk, elementalist, mesmer, necromancer
"/api/name/:name" - replace name with skill name to get information about specific skill
"/api/random-skill" - return 1 random skill from any profession
```

### Currently implemented skills

- [x] Core
- - [x] Warrior
- - [x] Ranger
- - [x] Monk
- - [x] Elementalist
- - [x] Mesmer
- - [x] Necromancer
- [ ] All skills
- [ ] More request filters: by campaign, attribute, etc

## For running the API locally

Start the server with the command:

```
deno run --allow-net main.ts
```

This starts the server at http://localhost:8000/
