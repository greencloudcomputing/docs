// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents"
import Endpoint from "../components/Endpoint"
import SampleEmail from "../components/SampleEmail"

export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "sampleEmail" tag to our <SampleEmail /> component!
    // `SampleEmail` will receive all props that were passed to `sampleEmail` in MDX
    sampleEmail: SampleEmail,
    endpoint: Endpoint,
}
