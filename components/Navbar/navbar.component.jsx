import { Button, AppBar } from "@mui/material";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <AppBar position="static">
      <div className={styles.navbar}>
        <Button variant="text" className={styles.buttonText}>
          Scanner
        </Button>
        <Button variant="text" className={styles.buttonText}>
          Inventory
        </Button>
      </div>
    </AppBar>
  );
};

export default Navbar;
