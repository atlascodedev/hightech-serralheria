const { spawn } = require("child_process")

const init = async () => {
  try {
    if (
      require("commander/package.json").version !== null ||
      require("commander/package.json").version !== undefined
    ) {
      let spawnNpmInstallCommander = spawn("npm.cmd", ["i", "commander"])

      spawnNpmInstallCommander.stdout.on("data", data => {
        console.log(data.toString())
      })

      spawnNpmInstallCommander.stderr.on(`data`, data => {
        console.log(data.toString())
      })

      spawnNpmInstallCommander.on("exit", code => {
        console.log("Child exited with code " + code)
      })
    }
  } catch (error) {
    console.log("Darn")
  }
}

init()
