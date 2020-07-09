import { get, controller, use } from "../decorators"
import { Response, Request, NextFunction } from "express" // eslint-disable-line no-unused-vars
import { logger } from "../middleware/logger"

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Username</label>
          <input name="username" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `)
  }
}

// export default LoginController
