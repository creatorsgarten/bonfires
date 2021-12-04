import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Profile {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Int, {nullable:true})
    userId!: number | null;

    @Field(() => String, {nullable:true})
    firstName!: string | null;

    @Field(() => String, {nullable:true})
    lastName!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    homeAddress!: string | null;

    @Field(() => String, {nullable:true})
    lineId!: string | null;
}
