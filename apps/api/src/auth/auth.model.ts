import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class LoginResult {
  @Field(() => String, { nullable: false })
  token!: string
}
