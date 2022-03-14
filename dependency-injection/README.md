# Depedency Injector Architecture

## Branch steps/3_nest_architecture
This branch will help us know how to architect the nest app

1. App Architecture
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.postimg.cc/N0PH2tFN/dependency-injector.png" width="960" alt="Nest Logo" /></a>
</p>

2. Use of nest cli to generate modules and services
```
  nest g module computer
  nest g controller computer
  nest g module cpu
  nest g service cpu
  nest g module disk
  nest g service disk
  nest g module power
  nest g service power
```

3. Use of *Imports* and *Exports* in **Modules** to allow services from one module to be utilized by other modules 
