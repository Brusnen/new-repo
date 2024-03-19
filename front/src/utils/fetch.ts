
export type FormDataType = {
    name: string;
    phoneNumber: string;
}

export const sendRequest = (formData: FormDataType) => {
    fetch( '/api/requests/', {
        method: 'POST',
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data: any) => {
        console.log("request is successful", data);
    })
    .catch(error => {

        console.error('There was a problem with the fetch operation:', error);
    })
}
