import * as React from 'react'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: 0,
        top: 2,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    }
}))
export default function CartWidget() {
    const { getQty } = useContext(CartContext)
    return (
        <IconButton aria-label="cart" >
            <StyledBadge badgeContent={getQty()} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    )
}