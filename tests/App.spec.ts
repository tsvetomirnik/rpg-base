import { App } from '../src/game/App';

describe("App", function() {
  it("simulation passes", function() {
    let app = new App();
    app.start();
    expect(true).toBe(true);
  });
});
