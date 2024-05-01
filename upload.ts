function getPresignedUrl(file: File) {

    return makeAPIRequest(
        "POST",
        "upload/create",
        {
            original_filename: file.name,
            content_type: file.type,
        },
        (response) => response as {
            key: string;
            presigned_upload_url: string;
        },
    );

}

function uploadFile(
    file: File,
    presignedUploadUrl: string,
    onProgress: (pct: number) => void,
): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.upload.addEventListener("progress", (e) => {
            if (e.lengthComputable) {
                const pct = e.loaded / e.total;
                onProgress(pct * 100);
            }
        });
        xhr.upload.addEventListener("error", (e) => {
            reject(new Error("Upload failed: " + e.toString()));
        });
        xhr.upload.addEventListener("abort", (e) => {
            reject(new Error("Upload aborted: " + e.toString()));
        });
        xhr.addEventListener("load", (e) => {
            if (xhr.status === 200) {
                resolve();
            } else {
                reject(new Error("Upload failed " + xhr.status));
            }
        });
        xhr.open("PUT", presignedUploadUrl, true);
        try {
            xhr.send(file);
        } catch (e) {
            reject(new Error("Upload failed: " + e.toString()))
        }
    });
}

function makeAPIRequest(arg0: string, arg1: string, arg2: { original_filename: string; content_type: string; }, arg3: (response: any) => { key: string; presigned_upload_url: string; }) {
    throw new Error("Function not implemented.");
}

