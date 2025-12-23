const PrivacyPage = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 text-sm text-slate-700 space-y-4">
            <h1 className="text-lg font-semibold">Privacy Policy</h1>

            <p>
                ToothLedger does not collect, store, or transmit personal data.
            </p>

            <p>
                All tooth maps are created locally in the user’s browser. No accounts,
                logins, or cloud storage are used.
            </p>

            <p>
                ToothLedger does not use analytics, tracking cookies, or advertising SDKs.
            </p>

            <p>
                If you access ToothLedger via a QR code, no information about the scan is
                retained.
            </p>

            <p>
                This app is intended as a visual aid for dental communication and does
                not replace professional medical records.
            </p>

            <p className="text-xs text-slate-500">
                Last updated: December 2025
            </p>
        </div>
    );
};

export default PrivacyPage;
