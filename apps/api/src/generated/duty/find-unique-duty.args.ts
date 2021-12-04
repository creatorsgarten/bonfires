import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyWhereUniqueInput } from './duty-where-unique.input';

@ArgsType()
export class FindUniqueDutyArgs {

    @Field(() => DutyWhereUniqueInput, {nullable:false})
    where!: DutyWhereUniqueInput;
}
