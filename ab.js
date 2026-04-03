const pl = require('nodejs-polars');

// Assuming you have a CSV file named 'data.csv' in your project directory
const csvFilePath = 'data.csv'; 

try {
    // Read the CSV file into a DataFrame
    // The readCSV function can automatically infer the schema
    const df = pl.readCSV(csvFilePath, {
        inferSchemaLength: 1000, // Optional: Number of lines to infer schema from
        hasHeader: true          // Optional: Indicate if the first row is a header
    });

    console.log("DataFrame schema:");
    console.log(df.schema); // View the inferred schema

    console.log("\nFirst 5 rows of the DataFrame:");
    console.log(df.head()); // Display the first few rows

    // Example operation: select a column and apply an alias
    const selectedData = df.select(
        pl.col("some_column_name").alias("renamed_column")
    );
    console.log("\nSelected and renamed column data:");
    console.log(selectedData.head());
    
} catch (error) {
    console.error("An error occurred:", error);
}
