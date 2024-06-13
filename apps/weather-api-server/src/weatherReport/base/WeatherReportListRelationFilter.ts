/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WeatherReportWhereInput } from "./WeatherReportWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WeatherReportListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WeatherReportWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherReportWhereInput)
  @IsOptional()
  @Field(() => WeatherReportWhereInput, {
    nullable: true,
  })
  every?: WeatherReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeatherReportWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherReportWhereInput)
  @IsOptional()
  @Field(() => WeatherReportWhereInput, {
    nullable: true,
  })
  some?: WeatherReportWhereInput;

  @ApiProperty({
    required: false,
    type: () => WeatherReportWhereInput,
  })
  @ValidateNested()
  @Type(() => WeatherReportWhereInput)
  @IsOptional()
  @Field(() => WeatherReportWhereInput, {
    nullable: true,
  })
  none?: WeatherReportWhereInput;
}
export { WeatherReportListRelationFilter as WeatherReportListRelationFilter };
