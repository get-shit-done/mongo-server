import { get, controller } from "../decorators"
import { Response, Request } from "express" // eslint-disable-line no-unused-vars

@controller('/auth')
class LoginController {
  @get('/login')
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
