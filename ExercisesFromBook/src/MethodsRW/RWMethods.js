

const serverURL = "http://localhost:3001"

export const fetchFileCode = async (filePath) => {
    let response = await fetch(serverURL + "/read/" + filePath)

  return response.text()
}

export const writeFileCode = async (filePath, code) => {

  await fetch(serverURL + "/write/" + filePath, {
    method: "POST",
    headers: {'content-type': "application/json"},
    body: JSON.stringify({content: code} ),
  })

}
