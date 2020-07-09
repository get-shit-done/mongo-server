import { get, controller, use, post, bodyValidator } from "../decorators"
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

  @post('/login')
  @bodyValidator('username', 'password')
  postLogin(req: Request, res: Response) {
    const { username, password } = req.body

    if (username === 'vincent' && password === 'password') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid username or password')
    }
  }
}

// export default LoginController
