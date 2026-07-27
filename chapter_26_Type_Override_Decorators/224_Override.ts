class BaseTest {
    Setup(): void {
        console.log("[BASE] Open browser");
    }
    TearDown(): void {
        console.log("[BASE] Close browser");
    }
}
class LoginTest extends BaseTest {

    override Setup(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override Setup(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
test.Setup();

let apitest = new APITest();
apitest.Setup();