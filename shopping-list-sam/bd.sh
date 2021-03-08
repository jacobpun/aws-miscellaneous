#!/bin/bash
OUTPUT_TEMPLATE=./template-out.yml
STACK_NAME=pk-shopping-list-example

if [ "$1" = "create" ]; then 
  echo "Creating stack " $STACK_NAME	
  aws cloudformation package --template-file template.yaml --s3-bucket shopping-list-lambda --output-template-file $OUTPUT_TEMPLATE
  aws cloudformation deploy --template-file $OUTPUT_TEMPLATE --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
  rm $OUTPUT_TEMPLATE
fi

if [ "$1" = "delete" ]; then
  echo "Deleting stack " $STACK_NAME	
  aws cloudformation delete-stack --stack-name $STACK_NAME
fi  
