import fs from 'fs';

const configPath = "./Common/Config/config.json";
const config =JSON.parse(fs.readFileSync(configPath, 'utf-8'));  
export default config;