import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "nowrap",

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto'
})

export const CartButton = styled("button", {
  backgroundColor: "$gray800",
  padding: "0.75rem",
  borderRadius: 6,
  position: "relative",
  border: "none",
  cursor: "pointer",
  color: "$gray300"

})