import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyUpdateManyMutationInput } from './duty-update-many-mutation.input';
import { DutyWhereInput } from './duty-where.input';

@ArgsType()
export class UpdateManyDutyArgs {

    @Field(() => DutyUpdateManyMutationInput, {nullable:false})
    data!: DutyUpdateManyMutationInput;

    @Field(() => DutyWhereInput, {nullable:true})
    where?: DutyWhereInput;
}
