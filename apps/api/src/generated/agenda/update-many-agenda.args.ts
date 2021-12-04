import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AgendaUpdateManyMutationInput } from './agenda-update-many-mutation.input';
import { AgendaWhereInput } from './agenda-where.input';

@ArgsType()
export class UpdateManyAgendaArgs {

    @Field(() => AgendaUpdateManyMutationInput, {nullable:false})
    data!: AgendaUpdateManyMutationInput;

    @Field(() => AgendaWhereInput, {nullable:true})
    where?: AgendaWhereInput;
}
