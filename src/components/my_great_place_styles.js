const K_SIZE = 25;

const commonStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  cursor: 'pointer'
};

const greatPlaceStyle = Object.assign(
  {},
  commonStyle,
  {
    width: K_SIZE,
    height: K_SIZE,
    border: '3px solid #fff',
    borderRadius: K_SIZE,
    backgroundColor: '#415576',
    boxShadow: 'rgba(65, 85, 118, 0.1) 0px 0px 0px 25px'
  }
)

const presentLocation = Object.assign({}, commonStyle,
  {
    transform: 'scale(0.75, 0.75)',
    width: '50px',
    height: '65px',
    backgroundImage: 'url(' + "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ5cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ5IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4wLjQgKDgwNTQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmljb25zIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0yIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0ibWFwNTgtKDEpIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTS0wLjA0NTA2MzE4NjgsMjMuMjYwMjI2OCBDLTAuMDQ1MDYzMTg2OCwyOC40OTIyNTk4IDEuNjk4NTg1MTYsMzMuMzE1NjA0MSA0LjY0MzMxNTkzLDM3LjIwMzgzNTEgTDIzLjQ0OTI1NTUsNjIuMDI3MjI4OSBMNDIuMjU1MDY1OSwzNy4yMDM4MzUxIEM0NS4yMDAwNTQ5LDMzLjMxNTYwNDEgNDYuOTQzNDQ1MSwyOC40OTIzODc2IDQ2Ljk0MzQ0NTEsMjMuMjYwMjI2OCBDNDYuOTQzNDQ1MSwxMC40MTUxMDUyIDM2LjQyMzU3OTcsMCAyMy40NDkxMjY0LDAgQzEwLjQ3NDgwMjIsMCAtMC4wNDUwNjMxODY4LDEwLjQxNTEwNTIgLTAuMDQ1MDYzMTg2OCwyMy4yNjAyMjY4IFoiIGlkPSJQYXRoIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iIzQ5OTBFMiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjMuNDQ5MTI2NCwzOC43NjY4NzQyIEMxNC43OTk0NDc4LDM4Ljc2Njg3NDIgNy43ODY1MDU0OSwzMS44MjQwMjQ3IDcuNzg2NTA1NDksMjMuMjYwMjI2OCBDNy43ODY1MDU0OSwxNC42OTY2ODQ1IDE0Ljc5OTQ0NzgsNy43NTMzMjM3MSAyMy40NDkxMjY0LDcuNzUzMzIzNzEgQzMyLjA5OTA2MzIsNy43NTMzMjM3MSAzOS4xMTE3NDczLDE0LjY5NjY4NDUgMzkuMTExNzQ3MywyMy4yNjAyMjY4IEMzOS4xMTE3NDczLDMxLjgyNDE1MjYgMzIuMDk5MTkyMywzOC43NjY4NzQyIDIzLjQ0OTEyNjQsMzguNzY2ODc0MiBMMjMuNDQ5MTI2NCwzOC43NjY4NzQyIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" + ')'
  }
)

export {greatPlaceStyle, presentLocation, K_SIZE};
