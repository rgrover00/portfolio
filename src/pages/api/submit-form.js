export default async function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body;

    // OPTION 1: Google Workspace Email Integration (See details below)
    // ...

    // OPTION 2: Google Sheets Integration (See details below)
    // ...

    res.status(200).json({message: 'Success'});
  } else {
    res.status(400).json({message: 'Invalid method'});
  }
}