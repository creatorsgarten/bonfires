import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyCreateManyInput } from './duty-create-many.input';

@ArgsType()
export class CreateManyDutyArgs {

    @Field(() => [DutyCreateManyInput], {nullable:false})
    data!: Array<DutyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
