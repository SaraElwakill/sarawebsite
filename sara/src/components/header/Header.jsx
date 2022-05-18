import { Box, Button, Link, Menu, MenuItem, Stack, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import './header.scss'
import { useState } from 'react';

const Header = () => {
    const pages = ['Products', 'Pricing', 'Blog'];
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);

    };


    return (
        <header>
            <Stack justifyContent="space-between" direction="row" sx={{ padding: "5px 10px" }}>
                <Stack direction="row" space={2} alignItems="center">
                    <img src="images/logo.jpg" alt="logo" style={{ width: "90px", height: "90px" }} />
                    {/* normal screen */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#038790',
                            textDecoration: 'none',
                        }}
                    >
                        SARA
                    </Typography>
                    {/* small screen */}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: '#038790',
                            textDecoration: 'none',
                        }}
                    >
                        SARA
                    </Typography>
                </Stack>
                <Stack direction="row" alignItems="center">
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                as={Link}
                                href="#hi3"

                                sx={{ my: 2, color: '#038790', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Stack>

            </Stack>
        </header>
    )
}
export default Header