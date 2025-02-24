const apps = [
  {
    name: 'sgt',
    script: 'app/server.js',
    interpreter: './node_modules/.bin/babel-node',
    env: {
      PORT: "3200",
      DB_URI: "mongodb://admin:0p3r4d0rm1np3sc4%2F%3F%2A@172.17.88.209:27017/emsdm?authSource=admin",
      PRIVATE_KEY: "SgH78/?+_01As",
      PUBLIC_URL: "http://sgt.pescalba.gob.ve:3200/public"
    },
    watch: ["app"],          // Directorios a observar
    ignore_watch: [          // Directorios a ignorar
      "node_modules", 
      "logs",
      ".git"
    ],
    watch_delay: 3000,   
  },
];

module.exports = { apps };
