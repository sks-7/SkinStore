import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();
  const SocialLogo = [
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDM5YmU1IiBkPSJNMjQgNUExOSAxOSAwIDEgMCAyNCA0M0ExOSAxOSAwIDEgMCAyNCA1WiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNi41NzIsMjkuMDM2aDQuOTE3bDAuNzcyLTQuOTk1aC01LjY5di0yLjczYzAtMi4wNzUsMC42NzgtMy45MTUsMi42MTktMy45MTVoMy4xMTl2LTQuMzU5Yy0wLjU0OC0wLjA3NC0xLjcwNy0wLjIzNi0zLjg5Ny0wLjIzNmMtNC41NzMsMC03LjI1NCwyLjQxNS03LjI1NCw3LjkxN3YzLjMyM2gtNC43MDF2NC45OTVoNC43MDF2MTMuNzI5QzIyLjA4OSw0Mi45MDUsMjMuMDMyLDQzLDI0LDQzYzAuODc1LDAsMS43MjktMC4wOCwyLjU3Mi0wLjE5NFYyOS4wMzZ6Ij48L3BhdGg+PC9zdmc+",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAiIGhlaWdodD0iNDAiCnZpZXdCb3g9IjAgMCA4MCA4MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjODU4NWNjIiBkPSJNNjEuNywyLjVIMTguM0M5LjYsMi41LDIuNSw5LjYsMi41LDE4LjN2NDMuNGMwLDguNyw3LjEsMTUuOCwxNS44LDE1LjhoNDMuNCBjOC43LDAsMTUuOC03LjEsMTUuOC0xNS44VjE4LjNDNzcuNSw5LjYsNzAuNCwyLjUsNjEuNywyLjVMNjEuNywyLjV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzhkOGRkOCIgZD0iTTIuNSwxOC4zdjQzLjRjMCw4LjcsNy4xLDE1LjgsMTUuOCwxNS44aDQzLjRjOC43LDAsMTUuOC03LjEsMTUuOC0xNS44VjE4LjNjMC0wLjYsMC0xLjMtMC4xLTEuOSBDNjQuOCw4LjYsNDkuOSw0LDM0LDRDMjQsNCwxNC40LDUuOCw1LjUsOS4xQzMuNiwxMS43LDIuNSwxNC45LDIuNSwxOC4zeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNiZDgyZjQiIGQ9Ik0yLjUsNjEuN2MwLDguNyw3LjEsMTUuOCwxNS44LDE1LjhoNDMuNGM4LjcsMCwxNS44LTcuMSwxNS44LTE1LjhWMjYuMUM2NS4zLDE3LjMsNTAuMywxMiwzNCwxMiBjLTExLjMsMC0yMS45LDIuNS0zMS41LDdWNjEuN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZWQ3M2Y0IiBkPSJNMi41LDYxLjdjMCw4LjcsNy4xLDE1LjgsMTUuOCwxNS44aDQzLjRjOC43LDAsMTUuOC03LjEsMTUuOC0xNS44VjM2LjRDNjUuOSwyNi4yLDUwLjcsMjAsMzQsMjAgYy0xMS40LDAtMjIuMSwyLjktMzEuNSw4VjYxLjd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2Y5N2RjZCIgZD0iTTIuNSw2MS43YzAsOC43LDcuMSwxNS44LDE1LjgsMTUuOGg0My40YzguNywwLDE1LjgtNy4xLDE1LjgtMTUuOFY0Ny43QzY2LjksMzUuNiw1MS4zLDI4LDM0LDI4IGMtMTEuNiwwLTIyLjQsMy40LTMxLjUsOS4zVjYxLjd6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZjOWM5NSIgZD0iTTIuNSw2MS43YzAsOC43LDcuMSwxNS44LDE1LjgsMTUuOGg0My40YzguNywwLDE1LjgtNy4xLDE1LjgtMTUuOHYtMC40QzY4LjksNDYuMiw1Mi43LDM2LDM0LDM2IGMtMTEuOSwwLTIyLjksNC4yLTMxLjUsMTEuMlY2MS43eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmFjOTkiIGQ9Ik0yLjUsNTguMnYzLjVjMCw4LjcsNy4xLDE1LjgsMTUuOCwxNS44aDQzLjRjNC44LDAsOS0yLjEsMTEuOS01LjRDNjcuOSw1NS43LDUyLjMsNDQsMzQsNDQgQzIxLjUsNDQsMTAuMiw0OS41LDIuNSw1OC4yeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmM0OWMiIGQ9Ik0xOC4zLDc3LjVoNDMuNGMxLjcsMCwzLjQtMC4zLDUtMC44QzYyLjYsNjIuNCw0OS41LDUyLDM0LDUyYy0xMi43LDAtMjMuNyw3LTI5LjYsMTcuMyBDNy4xLDc0LjIsMTIuMyw3Ny41LDE4LjMsNzcuNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZkZThkIiBkPSJNMTguMyw3Ny41aDQwLjNDNTUsNjcuMyw0NS40LDYwLDM0LDYwYy0xMC41LDAtMTkuNiw2LjMtMjMuNywxNS4zQzEyLjYsNzYuNywxNS40LDc3LjUsMTguMyw3Ny41eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmY2OWYiIGQ9Ik0xOC4zLDc3LjVoMzEuNmMtMy01LjctOS05LjUtMTUuOS05LjVjLTYuOSwwLTEyLjgsMy44LTE1LjksOS41QzE4LjIsNzcuNSwxOC4yLDc3LjUsMTguMyw3Ny41eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM4Yjc1YTEiIGQ9Ik02MiwzYzguMywwLDE1LDYuNywxNSwxNXY0NGMwLDguMy02LjcsMTUtMTUsMTVIMThDOS43LDc3LDMsNzAuMywzLDYyVjE4QzMsOS43LDkuNywzLDE4LDNINjIgTTYyLDIgSDE4QzkuMiwyLDIsOS4yLDIsMTh2NDRjMCw4LjgsNy4yLDE2LDE2LDE2aDQ0YzguOCwwLDE2LTcuMiwxNi0xNlYxOEM3OCw5LjIsNzAuOCwyLDYyLDJMNjIsMnoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNTUgMjJBMyAzIDAgMSAwIDU1IDI4IDMgMyAwIDEgMCA1NSAyMnpNNDAgNTRjLTcuNyAwLTE0LTYuMy0xNC0xNHM2LjMtMTQgMTQtMTQgMTQgNi4zIDE0IDE0UzQ3LjcgNTQgNDAgNTR6TTQwIDMwYy01LjUgMC0xMCA0LjUtMTAgMTAgMCA1LjUgNC41IDEwIDEwIDEwIDUuNSAwIDEwLTQuNSAxMC0xMEM1MCAzNC41IDQ1LjUgMzAgNDAgMzB6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTUxLDY4SDI5Yy05LjQsMC0xNy03LjYtMTctMTdWMjljMC05LjQsNy42LTE3LDE3LTE3aDIyYzkuNCwwLDE3LDcuNiwxNywxN3YyMiBDNjgsNjAuNCw2MC40LDY4LDUxLDY4eiBNMjksMTZjLTcuMiwwLTEzLDUuOC0xMywxM3YyMmMwLDcuMiw1LjgsMTMsMTMsMTNoMjJjNy4yLDAsMTMtNS44LDEzLTEzVjI5YzAtNy4yLTUuOC0xMy0xMy0xM0gyOXoiPjwvcGF0aD48L3N2Zz4=",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjMDNhOWY0IiBkPSJNMjQgNEEyMCAyMCAwIDEgMCAyNCA0NEEyMCAyMCAwIDEgMCAyNCA0WiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zNiwxNy4xMmMtMC44ODIsMC4zOTEtMS45OTksMC43NTgtMywwLjg4YzEuMDE4LTAuNjA0LDIuNjMzLTEuODYyLDMtMyBjLTAuOTUxLDAuNTU5LTIuNjcxLDEuMTU2LTMuNzkzLDEuMzcyQzMxLjMxMSwxNS40MjIsMzAuMDMzLDE1LDI4LjYxNywxNUMyNS44OTcsMTUsMjQsMTcuMzA1LDI0LDIwdjJjLTQsMC03LjktMy4wNDctMTAuMzI3LTYgYy0wLjQyNywwLjcyMS0wLjY2NywxLjU2NS0wLjY2NywyLjQ1N2MwLDEuODE5LDEuNjcxLDMuNjY1LDIuOTk0LDQuNTQzYy0wLjgwNy0wLjAyNS0yLjMzNS0wLjY0MS0zLTFjMCwwLjAxNiwwLDAuMDM2LDAsMC4wNTcgYzAsMi4zNjcsMS42NjEsMy45NzQsMy45MTIsNC40MjJDMTYuNTAxLDI2LjU5MiwxNiwyNywxNC4wNzIsMjdjMC42MjYsMS45MzUsMy43NzMsMi45NTgsNS45MjgsM2MtMS42ODYsMS4zMDctNC42OTIsMi03LDIgYy0wLjM5OSwwLTAuNjE1LDAuMDIyLTEtMC4wMjNDMTQuMTc4LDMzLjM1NywxNy4yMiwzNCwyMCwzNGM5LjA1NywwLDE0LTYuOTE4LDE0LTEzLjM3YzAtMC4yMTItMC4wMDctMC45MjItMC4wMTgtMS4xMyBDMzQuOTUsMTguODE4LDM1LjM0MiwxOC4xMDQsMzYsMTcuMTIiPjwvcGF0aD48L3N2Zz4=",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjZmZlZTU4IiBkPSJNMjQgNEEyMCAyMCAwIDEgMCAyNCA0NEEyMCAyMCAwIDEgMCAyNCA0WiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNC4xNjQsMzdjLTAuMDY3LDAtMC4xMzMtMC4wMDItMC4xOTktMC4wMDVsMCwwQzIzLjkyMywzNi45OTgsMjMuODgsMzcsMjMuODM1LDM3IGMtMS41NCwwLTIuNTI5LTAuNzE2LTMuNDg1LTEuNDA4Yy0wLjY2LTAuNDc4LTEuMjgzLTAuOTI5LTIuMDE3LTEuMDU0Yy0wLjM1OC0wLjA2MS0wLjcxNC0wLjA5MS0xLjA1OS0wLjA5MSBjLTAuNjIsMC0xLjExLDAuMDk4LTEuNDY4LDAuMTY5Yy0wLjIxNywwLjA0NC0wLjQwNSwwLjA4MS0wLjU0NywwLjA4MWMtMC4xNDksMC0wLjMxLTAuMDMzLTAuMzgtMC4yNzggYy0wLjA2MS0wLjIxMi0wLjEwNS0wLjQxOC0wLjE0Ny0wLjYxN2MtMC4xMDktMC41MTItMC4xODctMC44MjgtMC4zOTYtMC44NmMtMi40NDMtMC4zODctMy4xNDItMC45MTMtMy4yOTgtMS4yODggYy0wLjAyMi0wLjA1My0wLjAzNS0wLjEwNy0wLjAzOC0wLjE2Yy0wLjAwOC0wLjE0MywwLjA5Mi0wLjI3MSwwLjIzLTAuMjk0YzMuNzU1LTAuNjM0LDUuNDM5LTQuNTY2LDUuNTEtNC43MzMgYzAuMDAyLTAuMDA1LDAuMDA0LTAuMDA5LDAuMDA2LTAuMDE0YzAuMjMtMC40NzcsMC4yNzUtMC44OTIsMC4xMzQtMS4yMzFjLTAuMjU4LTAuNjIyLTEuMDAyLTAuODg2LTEuNTU4LTEuMDY2IGMtMC4xMzYtMC4wNDQtMC4yNjUtMC4wODYtMC4zNjctMC4xMjdjLTEuMTEtMC40NS0xLjIwMi0wLjkxMS0xLjE1OS0xLjE0N2MwLjA3NC0wLjQwMSwwLjU5Ny0wLjY4LDEuMDItMC42OCBjMC4xMTYsMCwwLjIxOCwwLjAyMSwwLjMwNCwwLjA2MmMwLjQ5OSwwLjI0LDAuODUzLDAuMzUxLDEuMjQxLDAuMzUxYzAuNTM3LDAsMC43NzEtMC4yMzEsMC43OTktMC4yNjIgYy0wLjAxNC0wLjI2LTAuMDMxLTAuNTMyLTAuMDQ4LTAuODEzYy0wLjExMi0xLjgxOS0wLjI1MS00LjA3OSwwLjMxMS01LjM2OWMxLjY4My0zLjg2Nyw1LjI1NC00LjE2Nyw2LjMwOC00LjE2NyBjMC4wMjcsMCwwLjQ2Mi0wLjAwNSwwLjQ2Mi0wLjAwNWgwLjA2M2MxLjA1NywwLDQuNjM0LDAuMzAxLDYuMzE5LDQuMTdjMC41NjIsMS4yOTEsMC40MjMsMy41NTMsMC4zMTEsNS4zN2wtMC4wMDUsMC4wNzkgYy0wLjAxNSwwLjI1My0wLjAzMSwwLjQ5OS0wLjA0MywwLjczNGMwLjAyNywwLjAyOCwwLjI0MiwwLjI0LDAuNzI5LDAuMjZoMC4wMDFjMC4zNy0wLjAxNSwwLjcxMS0wLjEwOSwxLjE3Ny0wLjMzMyBjMC4xMzYtMC4wNjUsMC4yODgtMC4wNzksMC4zOTItMC4wNzljMC4xNTgsMCwwLjMxOCwwLjAzMSwwLjQ1MSwwLjA4OGwwLjAwOCwwLjAwNGMwLjM3NywwLjEzNywwLjYyNCwwLjQwOCwwLjYyOSwwLjY5MSBjMC4wMDUsMC4yNjYtMC4xOTQsMC42NjctMS4xNjgsMS4wNjFjLTAuMTAxLDAuMDQxLTAuMjMsMC4wODMtMC4zNjcsMC4xMjdjLTAuNTU3LDAuMTgxLTEuMzEzLDAuNDI4LTEuNTcxLDEuMDUgYy0wLjE0MSwwLjM0LTAuMDk2LDAuNzUzLDAuMTM0LDEuMjMxYzAuMDAyLDAuMDA1LDAuMDA0LDAuMDA5LDAuMDA2LDAuMDE0YzAuMDcsMC4xNjcsMS43NTMsNC4wOTgsNS41MSw0LjczMiBjMC4xMzksMC4wMjQsMC4yMzgsMC4xNSwwLjIzLDAuMjk0Yy0wLjAwMywwLjA1NC0wLjAxNiwwLjEwOC0wLjAzOCwwLjE2MWMtMC4xNTUsMC4zNzEtMC44NTQsMC44OTgtMy4yOTcsMS4yODUgYy0wLjIsMC4wMzEtMC4yNzcsMC4yOTgtMC4zOTYsMC44NTdjLTAuMDQzLDAuMjAzLTAuMDg3LDAuNDAzLTAuMTQ4LDAuNjEzYy0wLjA1MiwwLjE4Mi0wLjE2MywwLjI2OC0wLjM1LDAuMjY4aC0wLjAzIGMtMC4xMjksMC0wLjMxNC0wLjAyNC0wLjU0Ny0wLjA3MWMtMC40MTQtMC4wODMtMC44NzctMC4xNTktMS40NjgtMC4xNTljLTAuMzQ0LDAtMC43MDEsMC4wMzEtMS4wNTksMC4wOTEgYy0wLjczMywwLjEyNS0xLjM1NiwwLjU3Ni0yLjAxNCwxLjA1M0MyNi42OTMsMzYuMjg0LDI1LjcwNCwzNywyNC4xNjQsMzd6Ij48L3BhdGg+PC9zdmc+",
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSIyMCIgZmlsbD0iI0U2MDAyMyI+PC9jaXJjbGU+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTI0LjQ0MzkwODcsMTEuNDE2MTM3N2MtOC42MzIzMjQyLDAtMTMuMjE1MzkzMSw1Ljc5NDYxNjctMTMuMjE1MzkzMSwxMi4xMDMwODg0CWMwLDIuOTMzODM3OSwxLjU2MTUyMzQsNi41ODUzODgyLDQuMDU5OTk3Niw3Ljc0ODQxMzFjMC4zNzg0MTgsMC4xNzYyMDg1LDAuNTgxNTQzLDAuMTAwMDM2NiwwLjY2ODQ1Ny0wLjI2NjkwNjcJYzAuMDY2ODk0NS0wLjI3ODQ0MjQsMC40MDM4MDg2LTEuNjM2OTAxOSwwLjU1NTM1ODktMi4yNjg0MzI2YzAuMDQ4NDYxOS0wLjIwMTUzODEsMC4wMjQ2NTgyLTAuMzc0NjMzOC0wLjEzODQyNzctMC41NzMxMjAxCWMtMC44MjY5NjUzLTEuMDAzMDUxOC0xLjQ4ODQ2NDQtMi44NDYxMzA0LTEuNDg4NDY0NC00LjU2NDU3NTJjMC00LjQxMTU2MDEsMy4zMzk5NjU4LTguNjc5OTkyNyw5LjAyOTk2ODMtOC42Nzk5OTI3CWM0LjkxMzA4NTksMCw4LjM1MzA4ODQsMy4zNDg0NDk3LDguMzUzMDg4NCw4LjEzNjkwMTljMCw1LjQwOTk3MzEtMi43MzIyOTk4LDkuMTU4NDQ3My02LjI4NjkyNjMsOS4xNTg0NDczCWMtMS45NjMwNzM3LDAtMy40MzMwNDQ0LTEuNjIzODQwMy0yLjk2MTU0NzktMy42MTUzNTY0YzAuNTY1NDI5Ny0yLjM3Njk1MzEsMS42NTY5MjE0LTQuOTQxNTI4MywxLjY1NjkyMTQtNi42NTg0NDczCWMwLTEuNTM1NDAwNC0wLjgyMzA1OTEtMi44MTY5NTU2LTIuNTI5OTY4My0yLjgxNjk1NTZjLTIuMDA2OTU4LDAtMy42MTg0NjkyLDIuMDc1Mzc4NC0zLjYxODQ2OTIsNC44NTY5MzM2CWMwLDEuNzcwMDE5NSwwLjU5ODQ0OTcsMi45Njg0NDQ4LDAuNTk4NDQ5NywyLjk2ODQ0NDhzLTEuOTgyMjk5OCw4LjM4MTUzMDgtMi4zNDUzOTc5LDkuOTQxNTI4MwljLTAuNDAxOTc3NSwxLjcyMjI5LTAuMjQ1MzAwMyw0LjE0MTYwMTYtMC4wNzEzNTAxLDUuNzIzMzg4N2wwLDBjMC40NTExMTA4LDAuMTc2ODc5OSwwLjkwMjQwNDgsMC4zNTM3NTk4LDEuMzY4Nzc0NCwwLjQ5ODEwNzlsMCwwCWMwLjgxNjg5NDUtMS4zMjc4MTk4LDIuMDM0OTczMS0zLjUwNTY3NjMsMi40ODY0NTAyLTUuMjQyMjQ4NWMwLjI0MzgzNTQtMC45MzYxNTcyLDEuMjQ2ODg3Mi00Ljc1NDYzODcsMS4yNDY4ODcyLTQuNzU0NjM4NwljMC42NTE1NTAzLDEuMjQzODk2NSwyLjU1NjE1MjMsMi4yOTY5MzYsNC41ODMxMjk5LDIuMjk2OTM2YzYuMDMxNDk0MSwwLDEwLjM3ODQxOC01LjU0NjkzNiwxMC4zNzg0MTgtMTIuNDQwMDAyNAlDMzYuNzczODY0NywxNi4zNTkxOTE5LDMxLjM4MjMyNDIsMTEuNDE2MTM3NywyNC40NDM5MDg3LDExLjQxNjEzNzd6Ij48L3BhdGg+PC9zdmc+",
  ];
  const handleOnClick = (a) => {
    navigate(a);
  };
  return (
    <div className={styles.footer_mainCont}>
      <div className={styles.footer_innerCont}>
        <div className={styles.footer_topCont}>
          <div className={styles.footer_topContdiv_1}>
            <div>
              <p>
                Sign up to our email list and receive 20% off your next order
              </p>
            </div>
            <div>
              <Button
                backgroundColor="#2E3337"
                color="white"
                borderRadius={0}
                _hover={{ bg: "teal.600" }}
                onClick={() => handleOnClick("/register")}
                size="sm"
              >
                SIGN UP
              </Button>
            </div>
          </div>
          <div className={styles.footer_topContdiv_2}>
            <div>
              <p>Connect with us</p>
            </div>
            <div>
              {SocialLogo.map((el) => {
                return <img src={el} alt="" key={el} />;
              })}
            </div>
          </div>
        </div>
        <div className={styles.footer_bottomCont}>
          <div className={styles.footer_bottomContDiv}>
            <hr />
            <p>Help & Information</p>
            <div>
              <p>Customer Service</p>
              <p>Delivery Information</p>
              <p>Returns & Refunds</p>
              <p>Help Center</p>
              <p>Track my order</p>
              <p>Accessibility</p>
              <p>Cookie Settings</p>
            </div>
          </div>
          <div className={styles.footer_bottomContDiv}>
            <hr />
            <p>About SkinStore</p>
            <div>
              <p>Key Workers Discount</p>
              <p>About Us</p>
              <p>Affiliate Program</p>
              <p>Brand Directory</p>
              <p>Coupon Codes</p>
              <p>Refer A Friend</p>
              <p>Student Discount</p>
              <p>Join SkinStore Experts</p>
            </div>
          </div>
          <div className={styles.footer_bottomContDiv}>
            <hr />
            <p>Legal</p>
            <div>
              <p>Cookie Information</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Modern Slavery Statement</p>
            </div>
          </div>
          <div className={styles.footer_bottomContDiv}>
            <hr />
            <p>How To Contact Us</p>
            <div>
              <p>Message Us</p>
              <p>Free Beauty Consultations</p>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footer_bottomLogoDiv}>
          <img
            src="https://s1.thcdn.com/enterprise/assets/skstr-global-113e023e-ecc9-45df-abad-eb92ce1956c9-logo-default.svg"
            alt=""
            onClick={() => handleOnClick("/")}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
