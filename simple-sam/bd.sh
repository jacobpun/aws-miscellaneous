#!/bin/bash
OUTPUT_TEMPLATE=./template-out.yml
STACK_NAME=pk-demo-lambda

if [ "$1" = "create" ]; then 
  echo "Creating stack " $STACK_NAME	
  aws cloudformation package --template-file template.yml --s3-bucket pk-demo-lambda --output-template-file $OUTPUT_TEMPLATE
  aws cloudformation deploy --template-file $OUTPUT_TEMPLATE --stack-name $STACK_NAME --capabilities CAPABILITY_IAM
  rm $OUTPUT_TEMPLATE
fi

if [ "$1" = "delete" ]; then
  echo "Deleting stack " $STACK_NAME	
  aws cloudformation delete-stack --stack-name $STACK_NAME
fi  
