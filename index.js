// const self = {
//     recorderIP: '192.168.11.121',
//     cameraIP: '192.168.12.6',
//     startTime: '20250204T144221Z',
//     endTime: '20250204T144232Z'
// };

// const url = new URL('https://localhost/api/cameras/Hikvision/startplayback');
// url.searchParams.append('recorderIp', self.recorderIP);
// url.searchParams.append('cameraIp', self.cameraIP);
// url.searchParams.append('startTime', self.startTime);
// url.searchParams.append('endTime', self.endTime);

//   async function func () {
// console.log('===>url.toString()',url.toString())
// try {
    

// const response = await fetch(url.toString(), {
//     method: 'GET',
//     credentials: 'include', 
//     headers: {
//         'Content-Type': 'application/json',
//         'Cookie': '.AspNetCore.Cookies=CfDJ8OY5z9kZs4BGst6GVzfXEU92sOfE0_s_Hpp6j-Ktp_QN7pu__SpxOyLx_dJGNoayvst0K1mlnzsT6Rs-WzVEqC_YcCUbmTpMOaSzXb2jd3kDkAJce9lUaJ1Os2PuEBbAl6U7ggEjcnFZ_MCHgA9ii7MriQVV7vTGnC907uHAW7eN1KLNtH0fBFN8ZHzmVrFVEy4JVF0GgcVVNgOW_zGRZGE2eIr0d2ltfE_ijSJ7GLolUhsWednLFOa1UE-ZgxiuDBcp0tYSH4B5Hf_-B-MlY3PdSmmY0aL9VRPclrpCcvdFCucSye09HBsFnY4m0RpSAavcJXa3H9PaLk6dfihF0BgCAqx5xywram9OpzYXDdXcZYxCv1mckwbMdvkwmQVLWylWuCxvT0l9qR8nmGJId4lJBsWiNEeI99ks_WsNy6bjcGnId7CVMEfEPS5Ov4AwDIMXsiZyoztzIal6Y00wfN5AdkDNaAWhr-RNiLC8OXuwFuaZ8q2jad28b1IsUo9m7aRNB2wG9O0EOgxnJ4vt9bnPVlHLljE8zVeNfSsKEBFIyP1-IVXl4ST40gu8o6A90_jV7QXml3sIgI3580nCIBJRJjT9F-POyynMVU1jG9t3dKBO8AGVJDayl61TVf6VmfC_dBsISH39jnOH2p9ZB7veylD9AZVSBFpDkJ8iJQhLboye211F_fjPtRLXcHyFNbO_yiVC2Tetd7R4IXFTMY8'
//     }
// })

// if (!response.ok) {
//     throw new Error(`Ошибка загрузки видео: ${response.status} ${response.statusText}`);
// }

// const ids = await response.json()
// const GUID = ids.recordId

// const data = await fetch(`https://localhost/api/cameras/Hikvision/checkRecordFile?recordId=${GUID}`,{
//     method: 'GET',
//     credentials: 'include', 
//     headers: {
//         'Content-Type': 'application/json',
//         'Cookie': '.AspNetCore.Cookies=CfDJ8OY5z9kZs4BGst6GVzfXEU92sOfE0_s_Hpp6j-Ktp_QN7pu__SpxOyLx_dJGNoayvst0K1mlnzsT6Rs-WzVEqC_YcCUbmTpMOaSzXb2jd3kDkAJce9lUaJ1Os2PuEBbAl6U7ggEjcnFZ_MCHgA9ii7MriQVV7vTGnC907uHAW7eN1KLNtH0fBFN8ZHzmVrFVEy4JVF0GgcVVNgOW_zGRZGE2eIr0d2ltfE_ijSJ7GLolUhsWednLFOa1UE-ZgxiuDBcp0tYSH4B5Hf_-B-MlY3PdSmmY0aL9VRPclrpCcvdFCucSye09HBsFnY4m0RpSAavcJXa3H9PaLk6dfihF0BgCAqx5xywram9OpzYXDdXcZYxCv1mckwbMdvkwmQVLWylWuCxvT0l9qR8nmGJId4lJBsWiNEeI99ks_WsNy6bjcGnId7CVMEfEPS5Ov4AwDIMXsiZyoztzIal6Y00wfN5AdkDNaAWhr-RNiLC8OXuwFuaZ8q2jad28b1IsUo9m7aRNB2wG9O0EOgxnJ4vt9bnPVlHLljE8zVeNfSsKEBFIyP1-IVXl4ST40gu8o6A90_jV7QXml3sIgI3580nCIBJRJjT9F-POyynMVU1jG9t3dKBO8AGVJDayl61TVf6VmfC_dBsISH39jnOH2p9ZB7veylD9AZVSBFpDkJ8iJQhLboye211F_fjPtRLXcHyFNbO_yiVC2Tetd7R4IXFTMY8'
//     }
// }
// )

// const blob = await data.blob()
// const videoUrl = URL.createObjectURL(blob)
// console.log('===>videoUrl',videoUrl)


// const videoElement = document.getElementById('myVideo');
// console.log('===>videoElement',videoElement)
// videoElement.src = `${videoUrl}/Record.mp4`; // Устанавливаем ссылку в <video>

// } catch (error) {
//     console.error(error)
// }

//   } 

//   func()