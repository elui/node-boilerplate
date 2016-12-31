module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "Wanderwize",
      script    : "server.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "ubuntu",
      host : "wanderwize.com",
      ref  : "origin/master",
      repo : "git@github.com:elui/wanderwize.git",
      path : "/home/ubuntu/wanderwize",
      "post-setup" : "ls -la",
      "post-deploy" : "sudo setcap cap_net_bind_service=+ep /usr/local/bin/node && npm install && pm2 startOrRestart ecosystem.config.js --env production",
      env : {
        "MONGODB" : "mongodb://wanderwize-prod:wanderwize@ds159217.mlab.com:59217/wanderwize",
        "PORT" : 80,
        "LOGGERS" : ["papertrailLogger"]
      }
    }
  }
}
