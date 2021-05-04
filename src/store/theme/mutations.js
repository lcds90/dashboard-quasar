const SET_THEME = (state, payload) => {
  const {
    background,
    primary,
    secondary,
    accent,
    dark,
    positive,
    negative,
    info,
    warning
  } = payload
  const theme = state.theme
  theme.background = background
  theme.primary = primary
  theme.secondary = secondary
  theme.accent = accent
  theme.dark = dark
  theme.positive = positive
  theme.negative = negative
  theme.info = info
  theme.warning = warning
}

export { SET_THEME }
