import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";
import { IoMenu } from "react-icons/io5";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>

            <IoMenu className={styles.menu} onClick={toggleMenu} />

            <ul
                className={`${styles.links_list} ${
                    menuOpen ? styles.menu_open : ""
                }`}
            >
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>

                {!user && (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Entrar
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}

                {user && (
                    <>
                        <li>
                            <NavLink
                                to="/posts/create"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Novo post
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                    </>
                )}

                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Sobre
                    </NavLink>
                </li>

                {user && (
                    <li>
                        <Link onClick={logout}>Sair</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
